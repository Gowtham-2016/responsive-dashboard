import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import SearchIcon from '../assets/images/search-icon.svg';
import BellIcon from '../assets/images/bellIcon.svg';
import CardOneIcon from '../assets/images/CardOneIcon.svg';
import CardTwoIcon from '../assets/images/CardTwoIcon.svg';
import CardThreeIcon from '../assets/images/CardThreeIcon.svg';
import CardFourIcon from '../assets/images/CardFourIcon.svg';
import Avatar from '../assets/images/avatar.svg';
import SideNav from './SideNav';
import StatCard from '../components/StatCard';

const Dashboard = () => {
    const data = [
        {
            name: '',
            uv: 100,
            pv: 200,
            amt: 240,
        },
        {
            name: 'Week 1',
            uv: 400,
            pv: 400,
            amt: 221,
        },
        {
            name: 'Week 2',
            uv: 100,
            pv: 200,
            amt: 229,
        },
        {
            name: 'Week 3',
            uv: 400,
            pv: 300,
            amt: 200,
        },
        {
            name: 'Week 4',
            uv: 300,
            pv: 200,
            amt: 400,
        },
    ];
    const data01 = [
        {
            "name": "Basic Tees",
            "value": 55
        },
        {
            "name": "Custom Short Pants",
            "value": 31
        },
        {
            "name": "Super Hoodies",
            "value": 14
        },
    ];
    const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

    return (
        <div className="flex h-screen w-full justify-between bg-wild-sand">
            <div className="w-3/12">
                <SideNav />
            </div>
            <div className="flex flex-col m-12 ml-0 w-9/12 justify-between">
                <div className="flex justify-between w-full">
                    <div className="font-montserrat text-2xl font-bold">
                        Dashboard
                    </div>
                    <div className="flex gap-8 items-center">
                        <div>
                            <div className="relative">
                                <input className="h-[30px] w-44 text-xs bg-white border border-transparent text-gray-900 text-base rounded-10 outline-none focus:bg-gallery block w-full py-2 px-3" type="text" placeholder="Search..." />
                                <div className="absolute right-2 top-2">
                                    <img src={SearchIcon} className="h-4 mr-2" alt="search" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={BellIcon} className="h-5" />
                        </div>
                        <div>
                            <img src={Avatar} className="h-8" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-8 flex-wrap">
                    <StatCard 
                        className="flex flex-col rounded-xl bg-harp h-[120px] w-[214px] p-7"
                        icon={CardOneIcon}
                        label={"Total Revenues"}
                        value={"$2,129,430"}     
                    />
                    <StatCard 
                        className="flex flex-col rounded-xl bg-parchment h-[120px] w-[214px] p-7"
                        icon={CardTwoIcon}
                        label={"Total Transactions"}
                        value={"1520"}     
                    />
                    <StatCard 
                        className="flex flex-col rounded-xl bg-bizarre h-[120px] w-[214px] p-7"
                        icon={CardThreeIcon}
                        label={"Total Likes"}
                        value={"9721"}     
                    />
                    <StatCard 
                        className="flex flex-col rounded-xl bg-snuff h-[120px] w-[214px] p-7"
                        icon={CardFourIcon}
                        label={"Total Users"}
                        value={"892"}     
                    />
                </div>
                <div>
                    <div className="h-80 bg-white rounded-xl">
                        <div className="flex justify-between mx-8 py-4 pb-7">
                            <div className="">
                                <div className='text-lg font-bold'>Activities</div>
                                <div className='text-sm text-light-gray'>May - June 2021</div>
                            </div>
                            <div className='flex'>
                                <div className='flex items-center'>
                                    <div className='h-2 w-2 rounded-full bg-tonysPink mr-2'></div>
                                    <div>Guest</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='h-2 w-2 rounded-full bg-feijoa ml-6 mr-2'></div>
                                    <div>User</div>
                                </div>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={212}>
                            <LineChart width={950} height={212} data={data}
                                margin={{ top: 5, right: 50, left: 20, bottom: 0 }}>
                                <CartesianGrid stroke="#f5f5f5" vertical={false} />
                                <XAxis axisLine={false} dataKey="name" tick={{ fill: 'gray', fontSize: 14 }} />
                                <YAxis axisLine={false} tick={{ fill: '#858585', fontSize: 14 }} />
                                <Tooltip />
                                <Line type="basis" dot={false} dataKey="pv" stroke="#9BDD7C" strokeWidth={2} />
                                <Line type="monotone" dot={false} dataKey="uv" stroke="#E9A0A0" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="flex justify-between gap-8">
                    <div className="flex flex-col lg:flex-row justify-between rounded-xl bg-white h-[256px] lg:h-auto w-full p-6">
                        <div className='flex flex-col w-full lg:w-2/5'>
                            <div className='text-lg font-bold'>Top Products</div>
                            <div className='flex justify-start'>
                                <PieChart width={160} height={160}>
                                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                        </div>
                        <div className='flex flex-col w-full lg:w-1/2 mt-4 lg:mt-0'>
                            <div className='text-right mb-4 text-light-gray text-xs'>May-June 2021</div>
                            <div className='flex flex-col gap-4 pt-2'>
                                <div>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 rounded-full bg-feijoa mr-2'></div>
                                        <div className='text-sm font-bold'>Basic Tees</div>
                                    </div>
                                    <div className='text-xs text-light-gray'>55%</div>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 rounded-full bg-lite-yellow mr-2'></div>
                                        <div className='text-sm font-bold'>Custom Short Pants</div>
                                    </div>
                                    <div className='text-xs text-light-gray'>31%</div>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 rounded-full bg-lite-burgandy mr-2'></div>
                                        <div className='text-sm font-bold'>Super Hoodies</div>
                                    </div>
                                    <div className='text-xs text-light-gray'>14%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-xl bg-white h-[256px] w-full p-6">
                        <div className='flex justify-between pb-6'>
                            <div className='text-lg font-bold'>Today's Schedule</div>
                            <div className='text-xs text-light-gray'>See all ></div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='border-l-8 border-feijoa'>
                                <div className='text-sm font-bold pl-2'>Meeting with suppliers from Kuta Bali</div>
                                <div className='text-xs text-light-gray pl-2'>14.00-15.00</div>
                                <div className='text-xs text-light-gray pl-2'>at Sunset Road, Kuta, Bali </div>
                            </div>
                            <div className='border-l-8 border-lite-purple'>
                                <div className='text-sm font-bold pl-2'>Check operation at Giga Factory 1</div>
                                <div className='text-xs text-light-gray pl-2'>18.00-20.00</div>
                                <div className='text-xs text-light-gray pl-2'>at Central Jakarta </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;