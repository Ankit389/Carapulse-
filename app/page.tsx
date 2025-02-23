
import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/*toDO:OTP Verification / PasskayModal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
        <Image src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
            /> 

      <PatientForm/>
          <div className="text-14-regula mt-20 justify-between">
          <p className="justify-items-end  text-red-500 xl:text-left">
            © 2024 CaraPulse</p>
            <Link  href="/?admin=true"  className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
      
       
    </div>
  );
}
