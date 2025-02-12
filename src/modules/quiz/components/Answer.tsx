import clsx from 'clsx';

interface Props {
  option: string;
  answer: string;
  selected: boolean;
  isQuestionCountOdd: boolean;
  onChange: (answer: string) => void;
}

const Answer = ({ option, answer, selected, onChange, isQuestionCountOdd: isCountOdd }: Props) => {
  return (
    <span className="group">
      <input
        id={option}
        type="radio"
        value={option}
        name="answer-radios"
        checked={selected}
        className="appearance-none p-0 m-0 outline-none absolute"
        aria-label={`Option ${option}`}
        onChange={(e) => onChange(e.target.value)}
      />
      <label
        htmlFor={option}
        className={clsx(
          'px-3 lg:px-6 py-2 lg:py-4 flex items-center gap-6 border-2 cursor-pointer transition-colors',
          {
            'border-primary group-has-[:checked]:bg-primary': isCountOdd,
            'border-base-100 group-has-[:checked]:bg-base-100': !isCountOdd,
          },
        )}
      >
        <span
          className={clsx(
            'size-9 lg:size-12 flex items-center justify-center flex-shrink-0 font-bebas text-xl lg:text-3xl border border-transparent rounded-full select-none uppercase transition-colors',
            {
              'bg-primary text-base-100 group-has-[:checked]:border-base-100': isCountOdd,
              'bg-base-100 text-accent group-has-[:checked]:border-accent': !isCountOdd,
            },
          )}
        >
          {option}
        </span>
        <p
          className={clsx('font-sora text-lg lg:text-2xl select-none transition-colors', {
            'text-primary group-has-[:checked]:text-base-100': isCountOdd,
            'text-base-100 group-has-[:checked]:text-accent': !isCountOdd,
          })}
        >
          {answer}
        </p>
      </label>
    </span>
  );
};

export default Answer;
