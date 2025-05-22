import Button from "./button";
import ShowBookingHoc from "./show-booking-hoc";

export default function BookADemoButton({ className }: { className?: string }) {

    return (
        <ShowBookingHoc>
            <Button onClick={() => { }} label={"Book a demo"} variant="primary" className={className} />
        </ShowBookingHoc>
    )
}