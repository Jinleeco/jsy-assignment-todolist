import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex flex-col items-center mt-12">
        <div>
            <FadeLoader></FadeLoader>
        </div>
        <div className="font-bold my-2">
            loading...
        </div>
    </div>
    )
};

export default Loading;