import { useEffect, useState } from 'react';
import { from, timer } from 'rxjs';
import { getFacts } from '../../helpers/apiRequests';
import { map, tap, catchError, takeWhile, scan } from 'rxjs/operators';

const timer$ = timer(0, 1000).pipe(
  scan((acc) => --acc, 5),
  takeWhile((x) => x >= 0)
);

const Facts = () => {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState(null);
  const [hasTimer, setHasTimer] = useState(false);

  useEffect(() => {
    if (!fact && !error) return;
    timer$.subscribe(
      (next) => {
        setHasTimer(next);
      },
      (err) => {
        console.error(err);
      },
      () => {
        setHasTimer(false);
      }
    );
  }, [fact]);

  return (
    <>
      <button
        className={`${
          hasTimer ? 'tw-cursor-not-allowed' : ''
        } tw-mt-20 tw-ml-8 tw-min-w-12 tw-bg-yellow-500 hover:tw-bg-yellow-600 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded`}
        type="button"
        disabled={hasTimer}
        onClick={() => {
          return from(getFacts())
            .pipe(
              map((res) => {
                return res.data.fact;
              }),
              catchError((err) => new Error(err))
            )
            .subscribe(
              (next) => {
                setFact(next);
                setError(null);
              },
              (err) => {
                setError('Could not fetch a fact. Please try again later.');
                setFact(null);
              },
              () => {}
            );
        }}
      >
        {hasTimer ? `Please wait (${hasTimer}s)` : 'Get a random fact'}
      </button>
      {fact && (
        <div className="tw-mt-4 tw-text-xl tw-text-center tw-w-5/6 tw-mx-auto ">{`📝: ${fact}`}</div>
      )}
      {error && <div>error is: {error}</div>}
    </>
  );
};

export default Facts;
