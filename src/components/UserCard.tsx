// src/components/UserCard.tsx
import React from "react";
import { User } from "../data";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import Reveal from "./Reveal";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Reveal>
      <div className="relative group overflow-hidden bg-white rounded-lg shadow-md">
        <Image
          width={500}
          height={500}
          src={user.image}
          alt={user.title}
          className=" object-cover"
        />
        <div className=" p-2 sm:p-4">
          <h3 className=" text-lg sm:text-xl font-bold">{user.title}</h3>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            {user.rank}
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={user.social.facebook}
            className="text-white hover:text-gray-400"
          >
            <FaFacebookF className="" />
          </a>
          <a
            href={user.social.twitter}
            className="text-white hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href={user.social.linkedin}
            className="text-white hover:text-gray-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={user.social.instagram}
            className="text-white hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default UserCard;
