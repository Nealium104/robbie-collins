import Link from "next/link";
import Nav from '../components/Nav'
import ContactForm from "../components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact () {
    return (
        <>
            <Nav />
            <ContactForm />
            <Footer />
        </>
    )
}