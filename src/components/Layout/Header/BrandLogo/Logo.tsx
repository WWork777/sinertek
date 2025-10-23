const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2.5 group">
      {/* Иконка - микрочип с сигналом */}
      <svg 
        width="42" 
        height="42" 
        viewBox="0 0 42 42" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        {/* Внешний квадрат микрочипа */}
        <rect x="10" y="10" width="22" height="22" rx="2" 
          className="stroke-dark dark:stroke-white"
          strokeWidth="2" fill="none"/>
        
        {/* Внутренний квадрат */}
        <rect x="14" y="14" width="14" height="14" rx="1"
          className="fill-primary/20 stroke-primary dark:fill-white/20 dark:stroke-white"
          strokeWidth="1.5"/>
        
        {/* Контактные ножки микрочипа */}
        <line x1="10" y1="15" x2="6" y2="15" 
          className="stroke-dark dark:stroke-white"
          strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="21" x2="6" y2="21" 
          className="stroke-dark dark:stroke-white"
          strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="27" x2="6" y2="27" 
          className="stroke-dark dark:stroke-white"
          strokeWidth="2" strokeLinecap="round"/>
        
        <line x1="32" y1="15" x2="36" y2="15" 
          className="stroke-dark dark:stroke-white"
          strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="21" x2="36" y2="21" 
          className="stroke-dark dark:stroke-white"
          strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="27" x2="36" y2="27" 
          className="stroke-dark dark:stroke-white"
          strokeWidth="2" strokeLinecap="round"/>
        
        {/* Волны сигнала (анимированные) */}
        <path d="M 19 21 Q 19 18, 21 18 Q 23 18, 23 21 Q 23 24, 21 24 Q 19 24, 19 21" 
          className="fill-primary dark:fill-white"
          opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Название компании */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight text-dark dark:text-white">
          SINERTEK
        </span>
        <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600 dark:text-gray-400">
          Electronics
        </span>
      </div>
    </div>
  )
}

export default Logo
