import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import { capitalize } from '../helpers/helpers';
import withNavBar from '../Hocs/withNavbar';
import { connect } from 'react-redux';
import { getSelectedAnimalName } from '../state/selectors/generalSelectors';
import { animalToHumanAge, validateAge } from '../helpers/helpers';
import { noop, of } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { Link, useNavigate } from 'react-router-dom';

const BirthdayCalculator = ({ animalName }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!animalName) {
      navigate('/', { replace: true });
    }
  }, [animalName]);

  const [error, setError] = useState(false);
  const [age, setAge] = useState(null);
  return animalName ? (
    <div>
      <Title titleText={`${capitalize(animalName)} Birthday Calculator`} />
      <div className="tw-1/2 tw-px-3 tw-text-center tw-mt-16">
        <label className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">
          Age
        </label>
        <input
          className="tw-text-center tw-appearance-none tw-w-1/2 tw-text-center tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500"
          type="text"
          placeholder="Type age..."
          onChange={(e) => {
            of(e.target.value)
              .pipe(
                debounceTime(5000),
                map(
                  (x) => {
                    if (!x) {
                      setError(null);
                      setAge(null);
                      return noop;
                    }
                    if (validateAge(x)) {
                      setAge(animalToHumanAge[animalName.toLowerCase()](Number.parseInt(x)));
                      setError(null);
                      return noop;
                    }
                    setError(
                      'Your input is invalid. Please use integer values only that are between 1 and 500'
                    );
                    setAge(null);
                    return noop;
                  },
                  (err) => console.error(err)
                )
              )
              .subscribe(() => {});
          }}
        />
        <p className="tw-text-gray-600 tw-text-xs tw-italic">
          Use human years to find the age of you pet. Max age is 500.
        </p>
        {error && <p className="tw-text-red-600 tw-text-xs tw-italic">{error}</p>}
        {age && !error && (
          <p className="tw-text-teal-600 tw-text-xl tw-mt-4">{`Your ${animalName} is ${age} years old in human years 🎉`}</p>
        )}
      </div>
      <div className="tw-text-center">
        <Link to="/">
          <button
            className="tw-mt-20 tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded"
            type="button"
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  ) : null;
};

BirthdayCalculator.defaultProps = {
  animalName: '',
};

BirthdayCalculator.propTypes = {
  animalName: PropTypes.string,
};

const mapStateToProps = (state) => ({
  animalName: getSelectedAnimalName(state),
});

export default connect(mapStateToProps)(withNavBar(BirthdayCalculator));
