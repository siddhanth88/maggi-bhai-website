export default function LocationMap() {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-orange-200">
      <iframe
        title="Campaign Location"
        src="https://www.google.com/maps?q=Ward%209%20Bhiwandi%20Maharashtra&output=embed"
        className="w-full h-[420px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
