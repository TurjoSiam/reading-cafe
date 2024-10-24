import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='w-11/12 mx-auto my-5 border-b-2 flex items-center justify-between'>
            <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;