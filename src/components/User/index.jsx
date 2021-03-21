import React from 'react';
import { Route, Routes } from 'react-router';
import UserHeader from '../UserHeader';
import Feed from '../Feed';
import UserPhotoPost from '../UserPhotoPost';
import UserStats from '../UserStats';

export default function User() {
  return (
    <div className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
      </Routes>
    </div>
  );
}
