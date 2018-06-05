//
//  REFMapManager.m
//  ReferenceApp
//
//  Created by David Deller on 6/6/18.
//  Copyright © 2018 TallyGo. All rights reserved.
//

#import "REFMapManager.h"

@implementation REFMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(zoomLevel, double)

- (UIView *)view
{
  TGMapView *mapView = [TGMapView new];
  
  mapView.showsUserLocation = YES;
  [mapView setUserTrackingMode:MGLUserTrackingModeFollow animated:NO];
  
  return mapView;
}

@end
