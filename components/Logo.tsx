import Image from "next/image";

export default function Logo() {
    return (
        <Image src="/logo.png" alt="Logo" width={300} height={100} priority />
    );
}
