import Image from "next/image";
import Button from "./ui/Button";

export default function Card() {
    return (
        <>
            <div className="container grid items-center justify-center min-w-screen mt-8">
                <div className="Background bg-white rounded-2xl">
                    <div className="Image">
                        <Image
                            src="https://kzmljqgl368h7b2c47l8.lite.vusercontent.net/placeholder.svg?height=500&width=300"
                            alt="Placeholder"
                            title="Placeholder"
                            width={500}
                            height={500}
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="Title pt-2 pl-2">
                        <h2 className="text-black text-2xl font-semibold">OfficialParsaNaderi</h2>
                        <h3 className="text-gray-400 text-[20px] font-light pl-3">NullDeveloper</h3>
                    </div>
                    <div className="Description pt-2 pl-2">
                        <span className="block text-gray-400 text-[15px] text-start font-light">The one , Who wants to be a great Developer, <br /> is learning every day, and doing what he can to be the greatest ...</span>
                    </div>
                    <div className="Button">
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}