import { FileSizePipe } from './file-size.pipe';
describe('FileSize', () => {

    describe('Isolate FileSizePipe test', () => {
        const pipe = new FileSizePipe();

        it('should convert bytes to megabytes', () => {
            //expect(pipe.transform(1000)).toBe('1MB');
            //expect(pipe.transform(2000)).toBe('2MB');
        });
        // it('should use thr default extension when not supplied', () => {
        //     expect(pipe.transform(123456789)).toBe('117.74MB');
        //     expect(pipe.transform(987654321)).toBe('941.90MB');
        // });
        //it('should override the extension when supplied', () => {
        // expect(pipe.transform(123456789,'myExt')).toBe('117.74myExt');
        // expect(pipe.transform(987654321,'myExt')).toBe('941.90myExt');
        //});
    })

})