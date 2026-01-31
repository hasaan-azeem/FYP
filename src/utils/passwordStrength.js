import { Label } from "recharts"

export const getPasswordStrength = (password) => {
    if(!password) return {Label: "", color: ""};

    if(password.length < 6) {
        return {Label: "Weak", color: "bg-red-500"};
    }

    if(
        password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)
    ){
        return {Label: "Medium", color: "bg-emerald-500"};
    }

    return {Label: "Medium", color: "bg-yellow-500"};
};