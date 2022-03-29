import { Helmet } from 'react-helmet-async';
import { Fragment, useEffect, useState, useContext, useCallback } from 'react';
import { useAlert } from 'react-alert';
import HotelPreview from '../../components/HotelPreview';
import SearchBar from '../../components/SearchBar';
import HotelService from '../../services/HotelService';
import LocationContext from '../../context/LocationContext';

export default function HotelSearch() {
  const { location, setLocation } = useContext(LocationContext);
  const [look, setLook] = useState(false);
  const [hotels, setHotels] = useState([]);
  const alert = useAlert();

  const getResults = useCallback(async () => {
    if (location) {
      const results = await HotelService.getHotelsByName(location);
      if (results.length === 0) {
        alert.show(
          <div style={{ textTransform: 'none' }}>
            Vaya, no hay hoteles con la ubicación que ingresaste
          </div>
        );
      }
      setHotels(results);
    }
  }, [location]);

  useEffect(() => {
    getResults();
  }, []);

  useEffect(() => {
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
