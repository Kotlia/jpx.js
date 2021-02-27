import type Index from "./Index";

export default interface Indices {
  MainStockIndex: {
    Topix: Index;
    JpxNikkeiIndex400: Index;
    JpxNikkeiMidAndSmallCapIndex: Index;
    TseSecondStockIndex: Index;
    TseMothersIndex: Index;
    JasdaqIndex: Index;
    TseReitIndex: Index;
    TseInfrastructureFundsIndex: Index;
    TopixTotalReturnIndex: Index;
  };
  TopixNewIndexSeries: {
    TopixCore30: Index;
    TopixLarge70: Index;
    Topix100: Index;
    TopixMid400: Index;
    Topix500: Index;
    Topix1000: Index;
    TopixSmall: Index;
    TopixSmall500: Index;
  };
  TseScaleIndex: {
    Large: Index;
    Medium: Index;
    Small: Index;
  };
  StrategyTheme: {
    TopixHighDividendYield40Index: Index;
    TseDividendFocus100Index: Index;
    TopixExFinancials: Index;
    TseMothersCoreIndex: Index;
    JasdaqTop20: Index;
    JStockIndex: Index;
    TopixLeverageIndex: Index;
    TopixInverseIndex: Index;
    TopixDoubleInverseIndex: Index;
    "JPX-Nikkei400LeveragedIndex": Index;
    "JPX-Nikkei400InverseIndex": Index;
    "JPX-Nikkei400DoubleInverseIndex": Index;
  };
  IndustryType: {
    FisheriesAgricultureForestry: Index;
    Mining: Index;
    Building: Index;
    Food: Index;
    Textile: Index;
    PulpPaper: Index;
    Chemistry: Index;
    Nostrum: Index;
    OilCoal: Index;
    Rubber: Index;
    GlassStone: Index;
    steel: Index;
    NonferrousMetal: Index;
    Metal: Index;
    Machine: Index;
    Electronic: Index;
    Transport: Index;
    Precision: Index;
    Other: Index;
    ElectricityGas: Index;
    LandTransport: Index;
    MarineTransport: Index;
    AirTransport: Index;
    WarehouseTransport: Index;
    InformationCommunication: Index;
    Wholesale: Index;
    Retail: Index;
    bank: Index;
    InstrumentCommoditiesFutures: Index;
    insurance: Index;
    OtherFinance: Index;
    RealEstate: Index;
    Service: Index;
  };
  IndustryTypeStockIndex: {
    Topix17Food: Index;
    Topix17Energy: Index;
    Topix17BuildingMaterial: Index;
    Topix17MaterialChemistry: Index;
    Topix17nostrum: Index;
    Topix17CarTransport: Index;
    Topix17SteelNonferrous: Index;
    Topix17Machine: Index;
    Topix17ElectricalPrecision: Index;
    Topix17InformationService: Index;
    Topix17ElectricPowerGas: Index;
    Topix17TransportationLogistics: Index;
    Topix17TradingWholesale: Index;
    Topix17Retail: Index;
    Topix17Bank: Index;
    Topix17Finance: Index;
    Topix17RealEstate: Index;
  };
  TopixStyleIndexSeries: {
    TopixValue: Index;
    Topix500Value: Index;
    TopixSmallValue: Index;
    TopixGrowth: Index;
    Topix500Growth: Index;
    TopixSmallGrowth: Index;
  };
  TseReitIndexSeries: {
    TseReitOfficeIndex: Index;
    TseReitHouseIndex: Index;
    TseReitTradeDistributionIndex: Index;
    TseReitCoreIndex: Index;
    TseReitLogisticsFocusIndex: Index;
  };
  JasdaqMarketIndex: {
    JasdaqIndexStandard: Index;
    JasdaqIndexGrowth: Index;
  };
  Composite: {
    TopixComposite: Index;
    TseSecondCompositeIndex: Index;
    TseMothersCompositeIndex: Index;
  };
}
