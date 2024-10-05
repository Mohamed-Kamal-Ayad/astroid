import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const CongratsIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={216} height={172} viewBox="0 0 216 172" fill="none" {...props}>
    <Path
      d="M52.274.001C44.283 2.573 38.03 5.397 30.326 11.04c-.998.954-1.977 1.92-2.936 2.916.109.258.278.576.527 1.024.463.834 1.262 1.831 2.267 2.818a114.591 114.591 0 00-4.333 7.567c-1.67-1.384-3.17-2.924-4.375-4.652a98.512 98.512 0 00-9.32 13.856c.18.745.71 1.557 1.723 2.645 1.211 1.298 3.104 2.64 5.302 3.784a96.989 96.989 0 00-2.365 8.321c-3.393-1.538-6.496-3.536-8.936-6.074a96.184 96.184 0 00-6.114 19.873c.61 1.107 1.694 2.122 3.335 3.2 2.313 1.52 5.637 2.766 9.25 3.486-.02 2.93.114 5.836.37 8.705C9.519 77.748 4.503 76.12.412 73.431c-.022-.016-.048-.027-.07-.043A97.354 97.354 0 00.84 94.284c1.053 1.584 2.816 2.712 5.444 3.614 3.377 1.159 7.968 1.522 12.641 1.052a95.24 95.24 0 003.106 8.194c-6.371.955-12.877.738-18.512-1.195-.154-.053-.304-.115-.456-.171a97.595 97.595 0 007.681 20.213c1.62 1.277 3.808 1.92 6.713 2.12 4.241.293 9.643-.788 14.794-2.887a105.183 105.183 0 005.358 6.941c-6.645 3.057-13.846 4.86-20.55 4.438a98.946 98.946 0 0015.89 18.095c1.943.658 4.241.666 7.011.127 4.378-.853 9.51-3.37 14.151-6.828.004.002.012-.002.015 0a104.853 104.853 0 007.254 5.121c-5.462 4.511-11.687 8.055-18.028 9.659a97.704 97.704 0 0017.03 9.189c2.252.192 4.693-.437 7.454-1.778 3.499-1.7 7.196-4.667 10.503-8.321 7.769 3.087 15.84 5.107 23.971 5.874l.812-8.478c-6.507-.614-13.036-2.171-19.41-4.524 3.138-5.056 5.294-10.548 5.9-15.22.538-4.149.038-7.355-1.724-9.758a57.245 57.245 0 01-10.66-3.187c-.079 2.945-.778 5.912-1.925 8.692-1.708 4.143-4.341 8.101-7.538 11.707a96.448 96.448 0 01-7.14-4.836c3.019-3.269 5.437-6.814 6.797-10.115 1.736-4.208 1.903-7.546.285-10.383a63.664 63.664 0 01-9.904-7.838c-.809 1.957-1.91 3.81-3.207 5.505-2.497 3.261-5.733 6.15-9.378 8.605a96.367 96.367 0 01-5.358-6.685c3.261-2.137 6.063-4.598 7.967-7.084 2.297-3.002 3.293-5.649 2.95-8.237a73.69 73.69 0 01-6.157-9.559 22.796 22.796 0 01-3.492 3.316c-3.082 2.355-6.749 4.167-10.674 5.476A88.508 88.508 0 0127.26 97.2c3.387-1.094 6.444-2.587 8.679-4.295 2.598-1.986 4.014-3.89 4.347-6.032a81.753 81.753 0 01-3.377-11.338c-.857.49-1.743.922-2.651 1.28-3.398 1.342-7.183 2.02-11.073 2.163a80.263 80.263 0 01-.471-8.521c3.173-.12 6.14-.654 8.41-1.55 2.097-.829 3.463-1.73 4.26-2.845a87.284 87.284 0 01-.37-13.571c-.297.047-.589.082-.884.114-3.021.33-6.182.068-9.306-.612a87.564 87.564 0 012.323-8.222c2.22.425 4.35.557 6.056.37 1.192-.13 2.067-.343 2.736-.64a85.886 85.886 0 012.723-11.849c-1.907-.335-3.778-.952-5.587-1.764a108.68 108.68 0 014.262-7.467c1.1.438 2.15.758 3.05.896.504.078.922.121 1.268.128a87.19 87.19 0 012.865-6.174C47.21 11.9 50.183 6.233 52.274.002zm111.446 0c2.091 6.23 5.063 11.897 7.753 17.27a86.99 86.99 0 012.878 6.173 9.955 9.955 0 001.254-.127c.903-.14 1.959-.456 3.065-.897a108.712 108.712 0 014.261 7.468c-1.813.813-3.692 1.429-5.6 1.764a85.857 85.857 0 012.721 11.849c.672.3 1.552.51 2.751.64 1.707.187 3.836.055 6.057-.37a87.756 87.756 0 012.309 8.237c-3.118.677-6.277.927-9.292.598-.3-.033-.597-.066-.897-.114a87.429 87.429 0 01-.357 13.57c.798 1.116 2.164 2.017 4.262 2.846 2.265.894 5.227 1.429 8.394 1.55a80.59 80.59 0 01-.47 8.521c-3.886-.145-7.665-.823-11.059-2.162-.91-.36-1.794-.792-2.651-1.28a81.715 81.715 0 01-3.378 11.322c.326 2.149 1.731 4.057 4.333 6.046 2.236 1.708 5.292 3.2 8.68 4.295a88.364 88.364 0 01-3.193 7.938c-3.921-1.309-7.581-3.124-10.66-5.476a22.859 22.859 0 01-3.506-3.315 73.742 73.742 0 01-6.156 9.559c-.347 2.586.652 5.236 2.95 8.237 1.901 2.484 4.703 4.948 7.966 7.084a96.226 96.226 0 01-5.359 6.685c-3.643-2.456-6.88-5.344-9.377-8.606-1.294-1.691-2.387-3.54-3.192-5.491a63.542 63.542 0 01-9.906 7.824c-1.617 2.837-1.45 6.175.286 10.384 1.361 3.3 3.78 6.845 6.799 10.114a96.606 96.606 0 01-7.155 4.836c-3.193-3.606-5.816-7.564-7.525-11.707-1.146-2.78-1.845-5.746-1.924-8.691a57.24 57.24 0 01-10.674 3.186c-1.766 2.404-2.262 5.61-1.724 9.758.605 4.673 2.773 10.165 5.914 15.221-6.373 2.353-12.903 3.909-19.41 4.524l.798 8.478c8.136-.768 16.21-2.784 23.985-5.875 3.306 3.654 7.004 6.621 10.503 8.321 2.762 1.341 5.202 1.971 7.454 1.778a97.562 97.562 0 0017.03-9.189c-6.338-1.602-12.57-5.141-18.028-9.646a104.703 104.703 0 007.254-5.134c4.643 3.461 9.785 5.974 14.166 6.828 2.762.538 5.057.539 6.997-.114a98.963 98.963 0 0015.905-18.108c-6.706.421-13.921-1.382-20.566-4.438a106.017 106.017 0 005.373-6.942c5.151 2.099 10.552 3.18 14.794 2.887 2.904-.2 5.092-.843 6.712-2.119a97.628 97.628 0 007.681-20.214c-.153.056-.302.118-.456.171-5.634 1.933-12.141 2.15-18.513 1.195a94.93 94.93 0 003.107-8.194c4.669.468 9.254.105 12.628-1.053 2.629-.901 4.4-2.028 5.457-3.613a97.398 97.398 0 00.486-20.896c-.02.013-.038.03-.057.043-4.091 2.69-9.108 4.317-14.309 5.078a90.64 90.64 0 00.37-8.706c3.612-.72 6.937-1.965 9.249-3.485 1.638-1.077 2.711-2.096 3.321-3.2a96.275 96.275 0 00-6.115-19.872c-2.438 2.535-5.533 4.533-8.921 6.074a96.843 96.843 0 00-2.366-8.322c2.192-1.144 4.078-2.487 5.288-3.784 1.008-1.082 1.551-1.89 1.739-2.631a98.549 98.549 0 00-9.322-13.87c-1.205 1.728-2.704 3.268-4.374 4.652a114.85 114.85 0 00-4.333-7.568c1.007-.986 1.803-1.985 2.266-2.818.245-.441.419-.754.527-1.01a102 102 0 00-2.95-2.93C177.964 5.397 171.712 2.573 163.721 0l-.001.001zM60.581 27.741L71.57 86.786h74.836l10.446-56.672-26.422 28.905-20.508-30.583-20.522 30.584-28.817-31.28zm12.57 67.553l1.625 8.747h68.45l1.611-8.748H73.152v.001z"
      fill={color}
    />
  </Svg>
);
