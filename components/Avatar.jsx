function Avatar({ url, classname }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile-pic"
      className={`h-10 rounded-full cursor-pointer 
      transition duration-200 transform 
      hover:scale-110 ${classname} hover:animate-pulse`}
    />
  );
}

export default Avatar;
