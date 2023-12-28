export default function ComparisonPlaceHolder() {
  return (
    <div
      className="flex-1 relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${"/jpg/placeholder.jpg"}), radial-gradient(circle at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)
        `,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // make the backround image very darker
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <p className="relative text-center text-2xl font-bold text-white">Please select two articles to compare</p>
    </div>
  );
}