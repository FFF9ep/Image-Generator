import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../Context/AppContext';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCredit = () => {

    const {user, backendUrl, loadCreditsData, token, setShowLogin} = useContext(AppContext);

    const navigate = useNavigate();

    const initPay = async (order) => {
        try {
            if (!window.Razorpay) {
                throw new Error("Razorpay SDK tidak ditemukan");
            }

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency || 'INR',
                name: 'Credit Payment ImageEngine',
                description: 'Payment for credits',
                order_id: order.id,
                prefill: {
                    name: user?.name || '',
                    email: user?.email || '',
                },
                handler: async function(response) {
                    try {
                        // Verifikasi pembayaran di backend
                        const verifyData = await axios.post(
                            backendUrl + '/api/user/verify-payment',
                            {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                                orderId: order.id
                            },
                            {
                                headers: { token }
                            }
                        );

                        if (verifyData.data.success) {
                            toast.success("Pembayaran berhasil!");
                            loadCreditsData(); // Refresh credit data
                            navigate('/dashboard'); // Redirect ke dashboard
                        }
                    } catch (error) {
                        console.error("Verification Error:", error);
                        toast.error("Gagal memverifikasi pembayaran");
                    }
                },
                modal: {
                    ondismiss: function() {
                        toast.info("Pembayaran dibatalkan");
                    }
                },
                theme: {
                    color: '#000000'
                }
            };

            const rzp = new window.Razorpay(options);
            
            rzp.on('payment.failed', function(response) {
                console.error("Payment Failed:", response.error);
                toast.error(response.error.description || "Pembayaran gagal");
            });

            rzp.open();

        } catch (error) {
            console.error("Razorpay Init Error:", error);
            toast.error(error.message || "Gagal memulai pembayaran");
        }
    }

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                resolve();
            };
            document.body.appendChild(script);
        });
    };

    const paymentRazorpay = async (plan) => {
        try {
            if (!user) {
                setShowLogin(true);
                return;
            }

            // Validasi data yang diperlukan
            if (!plan) {
                toast.error("Silakan pilih paket terlebih dahulu");
                return;
            }

            if (!user.email || !user.name) {
                toast.error("Data profil tidak lengkap. Silakan lengkapi profil Anda");
                return;
            }

            // Load Razorpay script first
            await loadRazorpayScript();

            toast.info("Memproses pembayaran...");

            const {data} = await axios.post(backendUrl + '/api/user/pay-razor', 
                {
                    plan,
                    userEmail: user.email,
                    userName: user.name,
                    userId: user._id
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        token
                    }
                }
            );

            if (!data.success) {
                throw new Error(data.message || "Gagal membuat order");
            }

            if (!data.order || !data.order.id || !data.order.amount) {
                throw new Error("Data order tidak lengkap");
            }

            await initPay(data.order);
            
        } catch (error) {
            console.error("Payment Error:", error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error.message || "Terjadi kesalahan saat memproses pembayaran");
            }
        }
    }

    return (
        <motion.div 
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='min-h-[80vh] text-center pt-14 mb-10'>
            <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
            <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

            <div className='flex flex-wrap justify-center gap-6 text-left'>
                {plans.map((item, index) => (
                    <div 
                    key={index} 
                    className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
                        <img width={40} src={assets.logo_icon} alt="" />
                        <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
                        <p className='text-sm'>{item.desc}</p>
                        <p className='mt-6'>
                            <span className='text-3xl font-medium'>${item.price} </span>/ {item.credits} credits
                        </p>
                        <button onClick={() => paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>
                            {user ? 'Purchase' : 'Get Started'}
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default BuyCredit
