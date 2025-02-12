interface Props {
  option: string;
  answer: string;
  selected: boolean;
  onChange: (answer: string) => void;
}

const Answer = ({ option, answer, selected, onChange }: Props) => {
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
        className="px-3 lg:px-6 py-2 lg:py-4 flex items-center gap-6 border-2 border-primary cursor-pointer group-has-[:checked]:bg-primary transition-colors"
      >
        <span className="size-9 lg:size-12 flex items-center justify-center flex-shrink-0 font-bebas text-xl lg:text-3xl bg-primary text-base-100 border border-transparent group-has-[:checked]:border-base-100 rounded-full select-none uppercase transition-colors">
          {option}
        </span>
        <p className="font-sora text-lg lg:text-2xl text-primary group-has-[:checked]:text-base-100 select-none transition-colors">
          {answer}
        </p>
      </label>
    </span>
  );
};

export default Answer;
