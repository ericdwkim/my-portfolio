import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export const ProjectBtn = () => {

    return (
        <button className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
            <div className="flex flex-row items-center">
                {<AiFillGithub/>}
                <span className="ml-1">Repo</span>
            </div>

        </button>
    )
}