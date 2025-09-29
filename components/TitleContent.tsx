export default function TitleContent({ text }: { text: string }) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12">
      <div className="flex items-center w-full">
        <span className="relative font-bold">
          <span className="bg-[#C8F502] px-2">{text}</span>
        </span>
        <div className="flex-1 h-px bg-gray-400 ml-2"></div>
      </div>
    </h2>
  )
}
