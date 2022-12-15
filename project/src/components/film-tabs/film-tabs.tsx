import { useState } from 'react';
import { Nav } from '../../const';
import { FilmType } from '../../types/film';
import { ReviewsType } from '../../types/review';
import FilmDetails from '../details/film-details';
import Navigation from '../navigation/navigation';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';

type FilmTabsProps = {
    film: FilmType;
    reviews: ReviewsType;
}

export default function FilmTabs({ film, reviews }: FilmTabsProps): JSX.Element {
  const [currentView, setCurrentView] = useState(Nav.Overview as string);

  const renderSwitchView = (): JSX.Element => {
    switch (currentView) {
      case Nav.Overview:
        return <Overview film={film} />;
      case Nav.Details:
        return <FilmDetails film={film} />;
      case Nav.Reviews:
        return <Reviews reviews={reviews} />;
      default:
        return <Overview film={film} />;
    }
  };

  return (
    <>
      <Navigation
        currentView={currentView}
        onTabClick={(view: string) => setCurrentView(view)}
      />

      {renderSwitchView()}
    </>
  );
}
