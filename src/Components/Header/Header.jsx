import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-4 border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </header>
    );
};

export default Header;