import Image from "next/image";
import React from "react";

export default function Background() {
    return (
        <div>
            <Image
                src="https://my.messagemind.ai/group-top.png"
                alt="Profile Picture"
                width={300}
                height={300}
                className="fixed top-0 right-0 z-20"
            />

            {/* hr below the top image */}
            <hr className="fixed top-[70px] left-0 w-full border-t border-dashed opacity-20 z-10" />
            <hr className="fixed top-[130px] left-0 w-full border-t border-dashed opacity-10 z-10" />
            <Image
                src="https://my.messagemind.ai/group-bottom.png"
                alt="Profile Picture"
                width={300}
                height={300}
                className="fixed bottom-0 left-0 z-20"
            />
        </div>
    );
}

