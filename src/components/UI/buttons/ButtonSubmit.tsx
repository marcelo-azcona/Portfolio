import './ButtonSubmit.styles.scss';

const ButtonSubmitted = ({ className }: { className?: string }) => {
  return (
    <button className={`${className}`} type="submit">
      <span className="submit__text">Submit!</span>
      <svg
        className="submitted__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
      </svg>
      <svg
        className="error__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 1280"
      >
        <g transform="translate(0,1280) scale(0.1,-0.1)">
          <path
            d="M1342 11457 c-518 -518 -942 -947 -942 -952 0 -6 921 -931 2048
                -2058 l2047 -2047 -2047 -2047 c-1127 -1127 -2048 -2052 -2048 -2058 0 -13
                1882 -1895 1895 -1895 6 0 931 921 2058 2048 l2047 2047 2047 -2047 c1127
                -1127 2052 -2048 2058 -2048 13 0 1895 1882 1895 1895 0 6 -921 931 -2048
                2058 l-2047 2047 2047 2047 c1127 1127 2048 2052 2048 2058 0 13 -1882 1895
                -1895 1895 -6 0 -931 -921 -2058 -2048 l-2047 -2047 -2047 2047 c-1127 1127
                -2052 2048 -2058 2048 -6 0 -434 -424 -953 -943z"
          />
        </g>
      </svg>
    </button>
  );
};

export default ButtonSubmitted;
