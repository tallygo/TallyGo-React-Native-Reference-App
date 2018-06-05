//
//  TallyGoNativeBridge.m
//  ReferenceApp
//
//  Created by David Deller on 6/1/18.
//  Copyright © 2018 TallyGo. All rights reserved.
//

#import "TallyGoNativeBridge.h"

#import "AppDelegate.h"

@implementation TallyGoNativeBridge

RCT_EXPORT_MODULE();

#pragma mark - Example 1

RCT_EXPORT_METHOD(runExample1) {
    // It's important to do all UI work on the main thread.
    // React Native does not necessarily run on the main thread, so we use NSOperationQueue to switch to the main thread.
    [NSOperationQueue.mainQueue addOperationWithBlock:^{
        [self getNavWithPreview];
    }];
}

- (void)getNavWithPreview {
    TallyGo.simulatedCoordinate = CLLocationCoordinate2DMake(34.101558, -118.340944); // Grauman's Chinese Theatre
    
    // Get these coordinates from your app, these are just a sample
    CLLocationCoordinate2D origin = CLLocationCoordinate2DMake(34.101558, -118.340944); // Grauman's Chinese Theatre
    CLLocationCoordinate2D destination = CLLocationCoordinate2DMake(34.011441, -118.494932); // Santa Monica Pier
    
    // Configure turn-by-turn navigation
    TGTurnByTurnConfiguration *config = [TGTurnByTurnConfiguration new];
    config.showsOriginIcon = NO;
    config.origin = origin;
    config.destination = destination;
    config.commencementSpeech = @"Let's go!";
    config.proceedToRouteSpeech = @"Please proceed to the route.";
    config.arrivalSpeech = @"You have arrived.";
    
    // Display it
    UINavigationController *viewController = [[TGPreviewViewController createWithConfiguration:config] embedInNavigationController];
    [self.viewController presentViewController:viewController animated:YES completion:nil];
}

#pragma mark - Example 2

RCT_EXPORT_METHOD(runExample2) {
    [NSOperationQueue.mainQueue addOperationWithBlock:^{
        [self getNavWithoutPreview];
    }];
}

- (void)getNavWithoutPreview {
    TallyGo.simulatedCoordinate = CLLocationCoordinate2DMake(34.101558, -118.340944); // Grauman's Chinese Theatre
    
    // Get these coordinates from your app, these are just a sample
    CLLocationCoordinate2D origin = CLLocationCoordinate2DMake(34.101558, -118.340944); // Grauman's Chinese Theatre
    CLLocationCoordinate2D destination = CLLocationCoordinate2DMake(34.011441, -118.494932); // Santa Monica Pier
    
    // Configure turn-by-turn navigation
    TGTurnByTurnConfiguration *config = [TGTurnByTurnConfiguration new];
    config.showsOriginIcon = NO;
    config.origin = origin;
    config.destination = destination;
    config.commencementSpeech = @"Let's go!";
    config.proceedToRouteSpeech = @"Please proceed to the route.";
    config.arrivalSpeech = @"You have arrived.";
    
    // If you’d rather skip the preview and jump straight into directions, you can do that:
    TGTurnByTurnViewController *viewController = [TGTurnByTurnViewController createWithConfiguration:config];
    [self.viewController presentViewController:viewController animated:YES completion:nil];
}

#pragma mark - Common

- (UIViewController *)viewController {
    return UIApplication.sharedApplication.delegate.window.rootViewController;
}

- (void)handleError:(NSError *)error {
    [self handleError:error viewController:nil];
}

- (void)handleError:(NSError *)error viewController:(UIViewController *)viewController {
    NSString *title = error.localizedDescription;
    NSString *message = @"This error alert is implemented by the Reference App, not the TallyGo SDK. The method is named -handleError:. You should provide your own error handling instead.";
    
    [self handleErrorWithTitle:title message:message viewController:viewController];
}

- (void)handleErrorWithTitle:(NSString *)title message:(NSString *)message viewController:(UIViewController *)viewController {
    if (viewController == nil) {
        viewController = self.viewController;
    }
    
    if (viewController.presentedViewController != nil) {
        return;
    }
    
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleAlert];
    [alert addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleCancel handler:nil]];
    
    [viewController presentViewController:alert animated:YES completion:nil];
}

@end
