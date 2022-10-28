import React, { Component } from 'react'

export class ExploreContent extends Component {
    render() {
        const colors = ["red", "green", "orange", "amber", "lime", "cyan", "violet", "rose"];
        const n = 50;
        let template = [];
        for (let index = 0; index < n; index++) {
            template.push({
                color: colors[Math.floor(Math.random() * 8)],
                span: Math.floor(Math.random() * 100)
            }
            )
        }
        console.log(template);
        return (
            <div className="grid grid-cols-3 gap-4 lg:mx-[250px] mx-10 mt-10">
                {
                    template.map((item, index) => {
                        return <div key={index} className={`group bg-${item.color}-200 h-72 min-h-full ${item.span > 80 ? "row-span-2" : ""}`}>
                            <div className='group-hover:flex items-center justify-center hidden bg-gray-800/20 w-full h-full text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                                <p className='mx-2'>{item.span}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
                                </svg>
                                <p className='mx-2'>{item.span}</p>
                            </div>
                        </div>;
                    })
                }
                <div className="bg-cyan-200 h-72 min-h-full"></div>
                <div className="bg-red-200 h-72 row-span-2 min-h-full"></div>
                <div className="bg-green-200 h-72 min-h-full"></div>
                <div className="bg-blue-200 h-72 min-h-full"></div>
                <div className="bg-rose-200 h-72 min-h-full"></div>
                <div className="bg-amber-200 h-72 min-h-full"></div>
                <div className="bg-blue-200 h-72 min-h-full"></div>
                <div className="bg-violet-200 h-72 min-h-full"></div>
                <div className="bg-green-200 h-72 min-h-full"></div>
                <div className="bg-orange-200 h-72 min-h-full"></div>
            </div>

        )
    }
}

export default ExploreContent