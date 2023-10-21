"use client"
import Link from "next/link";
import Image from "next/image";
import {Rightarrow} from "@/components/svgs";
import {getSession, signOut, useSession} from "next-auth/react";

const ProfileCard = () => {
    const {data: session, status} = useSession();
    if(status !== "authenticated") {
        signOut();
        return null;
    }
    const user = session.user.user;

    console.log(user.image, "image")

    const image = (user.image && user.image !== "none") ? user.image : "https://quizit-storage.s3.ap-northeast-2.amazonaws.com/character2.svg"

    return (
        <Link
            className="flex space-x-3"
            href="profile/badge"
        >
            <div className="grid place-items-center border border-neutral-100 w-18 h-18 rounded-full">
                <Image
                    src={image}
                    width={72}
                    height={72}
                    alt={"profileImage"}
                />
            </div>
            <div className="flex-grow flex justify-between">
                <div className="flex flex-col justify-between">
                    <div className="text-[13px] text-secondary-400 leading-[16px] mb-[3px]">Lv.{user.level}</div>
                    <div className="text-lg text-secondary-900 font-semibold leading-[21px] mb-[7px]">정의찬</div>
                    <div className="bg-primary-100 px-2 py-1 text-primary-900 rounded text-[13px]">
                        하루 목표 {user.dailyTarget}개
                    </div>
                </div>
                <Rightarrow className="self-center"/>
            </div>
        </Link>
    )
}

export default ProfileCard;