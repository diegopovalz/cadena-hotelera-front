import { Helmet } from 'react-helmet-async';
import { Fragment, useEffect, useState, useContext } from 'react';
import HotelPreview from '../../components/HotelPreview';
import SearchBar from '../../components/SearchBar';
import HotelService from '../../services/HotelService';
import LocationContext from '../../context/LocationContext';

export default function HotelSearch() {
  const { location, setLocation } = useContext(LocationContext);
  const [look, setLook] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      if (location) {
        const results = await HotelService.getHotelsByName(location);
        setHotels(results);
      }
    };

    getResults();
  }, []);

  useEffect(() => {
    const getResults = async () => {
      if (look) {
        const results = await HotelService.getHotelsByName(location);
        setHotels(results);
      }
    };

    getResults();
  }, [look]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setLook(true);
    }
  };

  const onSearchClick = () => {
    setLook(true);
  };

  const onChange = (e) => {
    setLook(false);
    setLocation(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Busca hoteles en tu lugar preferido</title>
      </Helmet>
      <SearchBar
        value={location}
        onKeyDown={onKeyDown}
        onClick={onSearchClick}
        onChange={onChange}
      />
      {hotels.map(
        ({ id, hotelName, costPerRoom, place, roomImgUrl, roomsAvailable }) => (
          <Fragment key={id}>
            <HotelPreview
              hotelName={hotelName}
              price={costPerRoom}
              location={place}
              roomImg={roomImgUrl}
              roomsAvailable={roomsAvailable}
            />
          </Fragment>
        )
      )}
    </>
  );
}
