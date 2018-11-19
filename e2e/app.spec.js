describe('App', () => {

    beforeEach(async () => {
        await device.reloadReactNative();
    })

    it('should have iamhere text', async () => {
        await expect(element(by.id('iamhere'))).toBeVisible();
    });
});