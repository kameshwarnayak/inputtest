// import logo from './logo.svg';
import {FlatList, Text, TextInput, View} from 'react-native';
import './App.css';
import Input from './Input';
function App() {
  return (
    <View
      style={{
        width: `100%`,
        height: 500,
        // backgroundColor: `red`,
      }}>
      <FlatList
        data={[
          {title: 'Title Text', key: 'item1'},
          // {title: 'Title Text 2', key: 'item2'},
          // {title: 'Title Text 2', key: 'item3'},
          // {title: 'Title Text 2', key: 'item4'},
          // {title: 'Title Text 2', key: 'item5'},
          // {title: 'Title Text 2', key: 'item6'},
          // {title: 'Title Text 2', key: 'item7'},
          // {title: 'Title Text 2', key: 'item8'},
          // {title: 'Title Text 2', key: 'item9'},
          // {title: 'Title Text 2', key: 'item10'},
          // {title: 'Title Text 2', key: 'item11'},
        ]}
        horizontal={true}
        style={{
          width: `100%`,
          // height: 500,
        }}
        renderItem={({item, index, separators}) => <Input />}
        keyboardShouldPersistTaps="handled"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        // Scroll only one image at a time no matter how fast the user swipes
        disableIntervalMomentum
        pagingEnabled
        snapToAlignment="start"
        // snapToInterval={containerWidth}
        scrollEnabled={true}
        // ref={scrollRef}
        // initialScrollIndex={page}
        initialNumToRender={3}
        windowSize={5}
        maxToRenderPerBatch={3}
        // CellRendererComponent={renderCell}
        // getItemLayout={getItemLayout}
        // keyExtractor={item => item.source}
        // viewabilityConfig={viewabilityConfig}
        // onViewableItemsChanged={updatePage.current}
      />
    </View>
  );
}

export default App;
