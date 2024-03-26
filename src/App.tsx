import React, { useState } from 'react';
import { useGetData } from './hooks';
import { PreviewPodcastCard } from './components/PodcastCard/';
import { FilterInput } from './components/FilterInput';

import './styles.css';

export default function App() {
  const { isSuccess, data } = useGetData();
  const [value, setValue] = useState('');

  return (
    <div>
      <h1 className="h1">WORKS!</h1>
      {isSuccess && (
        <div>
          <PreviewPodcastCard
            url="./bar"
            author={data.feed.entry[0]['im:artist'].label}
            image={data.feed.entry[0]['im:image']}
            label={data.feed.entry[0]['im:name'].label}
          />
          <hr />
          <div style={{ margin: '20px' }}>
            <FilterInput value={value} onChange={setValue} placeholder="Yeeeeyy!!" count={100} />
          </div>
        </div>
      )}
    </div>
  );
}
