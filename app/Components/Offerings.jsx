function Offerings({ title, info }) {
  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="text-sm leading-relaxed text-white/70">{info}</p>
    </div>
  );
}

export default Offerings;
