import { UseNameContext } from "../Context Api/ContextApi";

export default function Profile (){
    const {UseName, Email} = UseNameContext();
    return(
        <div>
            <div>
                <h1>Profile</h1>
            </div>
            <div>
                <img src="" alt="" />
                <h3>{ UseName}</h3>
                <p>{Email}</p>
            </div>
            <div className="list">
                <div>
                    <h3>Watchlist</h3>
                    <p>24 movies</p>
                </div>
                <div>
                    <h3>Favorites</h3>
                    <p>12movies</p>
                </div>
                <div>
                    <h3>Recently Viewed</h3>
                    <p>8 movies</p>
                </div>
            </div>

            <button>Log Out</button>
            <div className="footer">
                <div>
                    <button>🛖</button>
                    <p>Home</p>
                </div>
                <div>
                    <button>🪩</button>
                    <p>Discover</p>
                </div>
                <div>
                    <button>👁️‍🗨️</button>
                    <p>WatchList</p>
                </div>
                <div>
                    <button>🧑🏻‍🏫</button>
                    <p>profile</p>
                </div>
            </div>
        </div>
    )
}