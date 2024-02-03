import {IF} from '../url'



const HomePost = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={IF+post.photo}
          alt=""
          className="w-[88%] h-[99%] rounded-md mt-6"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[70%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flew mb-2 text-sm font-semibold text-gray-500 items-center justify-between space-x-4 md:mb-2">
          <div className="flex-space-x-2 text-sm flex justify-between">
            <p>@{post.username}</p>
            <span className="flex-space-x-2 text-sm flex justify-evenly gap-2">
              <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
            </span>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {post.desc.slice(0,200)+ "  ...Read More"}
        </p>
      </div>
    </div>
  );
};
export default HomePost;
