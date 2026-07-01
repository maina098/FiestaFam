'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Eye } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    document.cookie = "auth_token=simulated_token; path=/";
    router.push('/admin/super-admin');
  };

  return (
    <div className="min-h-screen bg-[#e8ecf3] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* User Icon */}
        <div className="w-20 h-20 bg-[#e8ecf3] rounded-full flex items-center justify-center mb-8 shadow-[6px_6px_12px_#c5c9d1,-6px_-6px_12px_#ffffff]">
          <User size={36} className="text-[#596886]" />
        </div>

        <h2 className="text-3xl font-bold text-[#2a3a54] mb-2 tracking-wide">
          Welcome back
        </h2>
        <p className="text-[#8494b0] mb-10 font-medium">
          Please sign in to continue
        </p>

        <form className="w-full space-y-6" onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="relative flex items-center">
            <div className="absolute left-4 text-[#8494b0]">
              <Mail size={20} />
            </div>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#e8ecf3] text-[#2a3a54] placeholder-[#8494b0] px-12 py-4 rounded-3xl outline-none shadow-[inset_6px_6px_12px_#c5c9d1,inset_-6px_-6px_12px_#ffffff] transition-all focus:shadow-[inset_8px_8px_16px_#c5c9d1,inset_-8px_-8px_16px_#ffffff]"
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center">
            <div className="absolute left-4 text-[#8494b0]">
              <Lock size={20} />
            </div>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#e8ecf3] text-[#2a3a54] placeholder-[#8494b0] px-12 py-4 rounded-3xl outline-none shadow-[inset_6px_6px_12px_#c5c9d1,inset_-6px_-6px_12px_#ffffff] transition-all focus:shadow-[inset_8px_8px_16px_#c5c9d1,inset_-8px_-8px_16px_#ffffff]"
            />
            <div className="absolute right-4">
              <button 
                type="button" 
                className="w-10 h-10 bg-[#e8ecf3] rounded-full flex items-center justify-center text-[#8494b0] shadow-[4px_4px_8px_#c5c9d1,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#c5c9d1,inset_-2px_-2px_5px_#ffffff] transition-all"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 pt-2">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-5 w-5 rounded bg-[#e8ecf3] border-none shadow-[inset_3px_3px_6px_#c5c9d1,inset_-3px_-3px_6px_#ffffff] text-[#2a3a54] focus:ring-0 cursor-pointer appearance-none checked:bg-[#2a3a54]"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm font-medium text-[#596886]">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#596886] hover:text-[#2a3a54] transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 px-4 bg-[#e8ecf3] text-[#2a3a54] font-bold text-lg rounded-3xl shadow-[6px_6px_12px_#c5c9d1,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c5c9d1,inset_-4px_-4px_8px_#ffffff] transition-all active:shadow-[inset_6px_6px_12px_#c5c9d1,inset_-6px_-6px_12px_#ffffff]"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm font-medium text-[#8494b0]">
          OR CONTINUE WITH
        </p>
        <p className="mt-4 text-sm font-medium text-[#8494b0]">
          Don't have an account? <Link href="/register" className="text-[#2a3a54] font-bold hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
