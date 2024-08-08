export default function copyright() {
  return (
    <div className="container-spacing">
      <hr className="my-10" />
      <p className="text-gray-600 text-sm text-center mb-10">
        &copy; {new Date().getFullYear()}{"Panacea Vetcare"}
      </p>
    </div>
  );
}
