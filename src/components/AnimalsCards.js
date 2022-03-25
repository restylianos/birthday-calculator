import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { capitalize } from '../helpers/helpers';
import { connect } from 'react-redux';
import { setSelectedAnimalAction } from '../state/actions/generalActions';

const AnimalsCards = ({ animalsArray, setAnimalName }) => {
  if (!animalsArray || !animalsArray.length) return null;
  return (
    <div className="tw-container tw-mt-8">
      <div className="tw-grid tw-grid-cols-4 tw-gap-4">
        {animalsArray.map((animal, i) => (
          <Link
            to={`/animal/${animal.name}`}
            key={`${animal.name}-${i}`}
            onClick={() => {
              of(animal)
                .pipe(map((currentAnimal) => capitalize(currentAnimal.name)))
                .subscribe(
                  (value) => {
                    setAnimalName(value);
                  },
                  (err) => {
                    console.error('could not get name of animal');
                  },
                  () => {}
                );
            }}
          >
            <div
              style={{ minHeight: '380px', maxHeight: '450px' }}
              className="tw-card tw-m-2 tw-cursor-pointer tw-border tw-border-gray-400 tw-rounded-lg hover:tw-shadow-md hover:tw-border-opacity-0 tw-transform hover:tw--translate-y-1 tw-transition-all tw-duration-200"
            >
              <div className="tw-m-3">
                <h2 className="tw-text-lg tw-mb-2">
                  {animal.name}
                  <span className="tw-text-sm tw-text-teal-800 tw-font-mono tw-bg-teal-100 tw-inline tw-rounded-full tw-px-2 tw-align-top tw-float-right tw-animate-pulse">
                    {animal.specie}
                  </span>
                </h2>
                <p className="tw-mt-4 tw-mb-4 tw-bg-customPink tw-inline tw-rounded-md tw-px-2 tw-float-left">
                  Fun fact: {animal.description}
                </p>
                <img
                  src={animal.img}
                  alt="animal"
                  className="tw-mx-auto tw-rounded-full"
                  style={{
                    minHeight: '10px',
                    maxHeight: '200px',
                    maxWidth: '100%',
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

AnimalsCards.defaultProps = {
  animalsArray: null,
};

AnimalsCards.propTypes = {
  animalsArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      specie: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    })
  ),
  setAnimalName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  setAnimalName: (params) => dispatch(setSelectedAnimalAction(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsCards);
