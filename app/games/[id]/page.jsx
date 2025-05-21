import React from 'react';
import {getGameDetail} from "@/lib/games";

const GameDetailPage = async ({params}) => {
    const {id} = await params
    const fetchGameDetail = await getGameDetail(id)
    return (
        <div>
            <h1>Game Detail</h1>
        </div>
    );
};

export default GameDetailPage;