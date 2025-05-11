"use-client";

import { useState } from "react";
import { useRouter } from "next/router";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from 'lucide-react';

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const signupSchema = z.object({
    name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido.' }),
    password: z.string().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
    confirmPassword: z.string().min(8, { message: 'A confirmação de senha deve ter pelo menos 8 caracteres' })
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
});

type SignupFromValues = z.infer<typeof signupSchema>;

export function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const from = useForm<SignupFromValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    async function onSubmit(formData: SignupFromValues) {

    }

    return (
    )
}