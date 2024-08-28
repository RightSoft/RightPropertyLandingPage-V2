import {  useState } from "react";
import toast from "react-hot-toast";
import TextInput from "../text-input/text-input";
import ActionButton from "../buttons/action-button";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');

    const createPostRequestOptions = () => {
        return {
            method: "GET",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        };
    };
    const createGoogleFormResponse = async (
        requestOptions: {},
        name: string,
        email: string,
        company: string,
        phone: string,
    ) => {
        await fetch(
            `https://docs.google.com/forms/d/e/1FAIpQLSdvF-NvMiw-uevCjcYXC4bHeVF_nWgczApvfi4gwWKfEAW9tA/formResponse?usp=pp_url&entry.1464535904=${name}&entry.1407115382=${company}&entry.1672668655=${email}&entry.2043609362=${phone}&submit=Submit`,
            requestOptions
        );
    };
    const clearInputs = () => {
        setName('');
        setEmail('');
        setCompany('');
        setPhone('');
    };
    const violation = () => {
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const phonePattern = /^(?=.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d)[\d\s+]+$/;
        if (emailPattern.test(email) === false) {
            toast.error('Please enter a valid email address');
            return false
        }
        if (name.length < 2) {
            toast.error('Please enter your name');
            return false;
        }
        if (company.length < 2) {
            toast.error('Please enter your company name');
            return false;
        }
        if (phone.length < 10 || phonePattern.test(phone) === false) {
            toast.error('Please enter a valid phone number');
            return false;
        }
        return true;
    };
    const handleSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();
        if (!violation()) return;
        const options = createPostRequestOptions();
        await createGoogleFormResponse(
            options,
            name,
            email,
            company,
            phone,
        );
        clearInputs();
        toast.success('Received Information Successfully!');

    };
    return <div className="w-[22.06rem] mobile:w-[19.5625rem] flex items-center flex-col">
        <div className="flex flex-col items-center gap-3 w-full">
            <TextInput placeholder="Phone company" label={"Name"} onChange={(e) => {
                setName(e.target.value)
            }} value={name} />
            <TextInput placeholder="Your name" label={"Company"} onChange={(e) => {
                setCompany(e.target.value)
            }} value={company} />
            <TextInput placeholder="The company you work for" label={"Email"} onChange={(e) => {
                setEmail(e.target.value)
            }} value={email} />
            <TextInput placeholder="Enter your work email" label={"Phone"} onChange={(e) => {
                setPhone(e.target.value)
            }} value={phone} />
        </div>
        <ActionButton text={"Submit"} className={"mt-[1.875rem] w-full bg-[#FFA657] rounded-[12px]"} onClick={(e: any) => handleSubmit(e)} />
    </div>

}