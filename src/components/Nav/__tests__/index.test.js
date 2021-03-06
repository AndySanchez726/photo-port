import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
    render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
    />);
    })
    // snapshot test
    //     it('matches snapshot', () => {
    //     const { asFragment } = render(<Nav />);
    //     expect(asFragment()).toMatchSnapshot();
    // });
})

describe('emoji is visable', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } =         render(<Nav
            categories={categories}
            setcurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);(<Nav />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visable', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } =         render(<Nav
            categories={categories}
            setcurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})