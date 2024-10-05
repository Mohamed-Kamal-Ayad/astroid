import React from 'react';

import { FocusAwareStatusBar, ScrollView, View } from '@/ui';

export const Favorites = () => {
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <View className="flex-1  px-4 pt-10" />
      </ScrollView>
    </>
  );
};
