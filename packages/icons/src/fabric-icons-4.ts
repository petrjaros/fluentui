  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-4"`,
      src: `url('${baseUrl}fabric-icons-4-a656cc0a.woff') format('woff')`
    },
    icons: {
      'HelpMirrored': '\uEA51',
      'ImportMirrored': '\uEA52',
      'ImportAllMirrored': '\uEA53',
      'ListMirrored': '\uEA55',
      'MailForwardMirrored': '\uEA56',
      'MailReplyMirrored': '\uEA57',
      'MailReplyAllMirrored': '\uEA58',
      'MiniContractMirrored': '\uEA59',
      'MiniExpandMirrored': '\uEA5A',
      'OpenPaneMirrored': '\uEA5B',
      'ParkingLocationMirrored': '\uEA5E',
      'SendMirrored': '\uEA63',
      'ShowResultsMirrored': '\uEA65',
      'ThumbnailViewMirrored': '\uEA67',
      'Media': '\uEA69',
      'Devices3': '\uEA6C',
      'Focus': '\uEA6F',
      'VideoLightOff': '\uEA74',
      'Lightbulb': '\uEA80',
      'StatusTriangle': '\uEA82',
      'VolumeDisabled': '\uEA85',
      'Puzzle': '\uEA86',
      'EmojiNeutral': '\uEA87',
      'EmojiDisappointed': '\uEA88',
      'HomeSolid': '\uEA8A',
      'Ringer': '\uEA8F',
      'PDF': '\uEA90',
      'HeartBroken': '\uEA92',
      'StoreLogo16': '\uEA96',
      'MultiSelectMirrored': '\uEA98',
      'Broom': '\uEA99',
      'AddToShoppingList': '\uEA9A',
      'Cocktails': '\uEA9D',
      'Wines': '\uEABF',
      'Articles': '\uEAC1',
      'Cycling': '\uEAC7',
      'DietPlanNotebook': '\uEAC8',
      'Pill': '\uEACB',
      'ExerciseTracker': '\uEACC',
      'HandsFree': '\uEAD0',
      'Medical': '\uEAD4',
      'Running': '\uEADA',
      'Weights': '\uEADB',
      'Trackers': '\uEADF',
      'AddNotes': '\uEAE3',
      'AllCurrency': '\uEAE4',
      'BarChart4': '\uEAE7',
      'CirclePlus': '\uEAEE',
      'Coffee': '\uEAEF',
      'Cotton': '\uEAF3',
      'Market': '\uEAFC',
      'Money': '\uEAFD',
      'PieDouble': '\uEB04',
      'PieSingle': '\uEB05',
      'RemoveFilter': '\uEB08',
      'Savings': '\uEB0B',
      'Sell': '\uEB0C',
      'StockDown': '\uEB0F',
      'StockUp': '\uEB11',
      'Lamp': '\uEB19',
      'Source': '\uEB1B',
      'MSNVideos': '\uEB1C',
      'Cricket': '\uEB1E',
      'Golf': '\uEB1F',
      'Baseball': '\uEB20',
      'Soccer': '\uEB21',
      'MoreSports': '\uEB22',
      'AutoRacing': '\uEB24',
      'CollegeHoops': '\uEB25',
      'CollegeFootball': '\uEB26',
      'ProFootball': '\uEB27',
      'ProHockey': '\uEB28',
      'Rugby': '\uEB2D',
      'SubstitutionsIn': '\uEB31',
      'Tennis': '\uEB33',
      'Arrivals': '\uEB34',
      'Design': '\uEB3C',
      'Website': '\uEB41',
      'Drop': '\uEB42',
      'HistoricalWeather': '\uEB43',
      'SkiResorts': '\uEB45',
      'Snowflake': '\uEB46',
      'BusSolid': '\uEB47',
      'FerrySolid': '\uEB48',
      'AirplaneSolid': '\uEB4C',
      'TrainSolid': '\uEB4D',
      'Ticket': '\uEB54',
      'WifiWarning4': '\uEB63',
      'Devices4': '\uEB66',
      'AzureLogo': '\uEB6A',
      'BingLogo': '\uEB6B',
      'MSNLogo': '\uEB6C',
      'OutlookLogoInverse': '\uEB6D',
      'OfficeLogo': '\uEB6E',
      'SkypeLogo': '\uEB6F',
      'Door': '\uEB75',
      'EditMirrored': '\uEB7E',
      'GiftCard': '\uEB8E',
      'DoubleBookmark': '\uEB8F',
      'StatusErrorFull': '\uEB90'
    }
  };

  registerIcons(subset, options);
}