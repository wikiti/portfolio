import { uniq } from 'lodash';

const capitalize = (value) => {
  if (!value) {
    return '';
  }

  const string = value
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9., -_]/, '');

  return string.replace(/^\w/, char => char.toUpperCase());
};

export default {
  methods: {
    prettifyDate(date) {
      if (date) {
        return capitalize(this.$d(new Date(date), 'short'));
      }

      return '';
    },
    prettifyDateRange(dateFrom, dateTo) {
      const dates = [this.prettifyDate(dateFrom)];

      if (dateTo) {
        dates.push(this.prettifyDate(dateTo));
      }
      else {
        dates.push(this.$t('common.present'));
      }

      return uniq(dates).join(' - ');
    }
  }
};
