import { UploadFields } from "./constant/upload-fields";
import { UploadScoreFields } from "./constant/upload-score-fields";
import { UploadSurveyFields } from "./constant/upload-survey-fields";
import { UploadWinnerFields } from "./constant/upload-winner-fields";

const isCorrectUploadFormat = (header: any[]): boolean => {
  if (header?.length < UploadFields.fields.length - 1) return false;

  return (
    (header[0] == UploadFields.keys.province ||
      header[0] == UploadFields.header.province) &&
    (header[1] == UploadFields.keys.regency ||
      header[1] == UploadFields.header.regency) &&
    (header[2] == UploadFields.keys.district ||
      header[2] == UploadFields.header.district) &&
    (header[3] == UploadFields.keys.village ||
      header[3] == UploadFields.header.village) &&
    (header[4] == UploadFields.keys.tps ||
      header[4] == UploadFields.header.tps) &&
    (header[5] == UploadFields.keys.dapil ||
      header[5] == UploadFields.header.dapil) &&
    (header[6] == UploadFields.keys.party ||
      header[6] == UploadFields.header.party) &&
    (header[7] == UploadFields.keys.candidate ||
      header[7] == UploadFields.header.candidate) &&
    (header[8] == UploadFields.keys.gender ||
      header[8] == UploadFields.header.gender) &&
    (header[9] == UploadFields.keys.result ||
      header[9] == UploadFields.header.result) &&
    (header[10] == UploadFields.keys.total_dpt ||
      header[10] == UploadFields.header.total_dpt) &&
    (header[11] == UploadFields.keys.total_pengguna_hak_pilih ||
      header[11] == UploadFields.header.total_pengguna_hak_pilih) &&
    (header[12] == UploadFields.keys.total_sah ||
      header[12] == UploadFields.header.total_sah) &&
    (header[13] == UploadFields.keys.total_tidak_sah ||
      header[13] == UploadFields.header.total_tidak_sah) &&
    (header[14] == UploadFields.keys.total_kursi ||
      header[14] == UploadFields.header.total_kursi ||
      header[14] == "jumlah_kursi")
  );
};

const isCorrectUploadWinnerFormat = (header: any[]): boolean => {
  if (header?.length < UploadWinnerFields.fields.length - 1) return false;

  return (
    (header[0] == UploadWinnerFields.keys.dapil ||
      header[0] == UploadWinnerFields.header.dapil) &&
    (header[1] == UploadWinnerFields.keys.sequence ||
      header[1] == UploadWinnerFields.header.sequence) &&
    (header[2] == UploadWinnerFields.keys.candidate ||
      header[2] == UploadWinnerFields.header.candidate) &&
    (header[3] == UploadWinnerFields.keys.party ||
      header[3] == UploadWinnerFields.header.party)
  );
};

const isCorrectUploadSurveyFormat = (header: any[]): boolean => {
  if (header?.length < UploadSurveyFields.fields.length - 1) return false;

  return (
    (header[0] == UploadSurveyFields.keys.party ||
      header[0] == UploadSurveyFields.header.party) &&
    (header[1] == UploadSurveyFields.keys.candidate ||
      header[1] == UploadSurveyFields.header.candidate) &&
    (header[2] == UploadSurveyFields.keys.gender ||
      header[2] == UploadSurveyFields.header.gender) &&
    (header[3] == UploadSurveyFields.keys.percentage ||
      header[3] == UploadSurveyFields.header.percentage) &&
    (header[4] == UploadSurveyFields.keys.institution ||
      header[4] == UploadSurveyFields.header.institution) &&
    (header[5] == UploadSurveyFields.keys.period ||
      header[5] == UploadSurveyFields.header.period) &&
    (header[6] == UploadSurveyFields.keys.type ||
      header[6] == UploadSurveyFields.header.type)
  );
};

const isCorrectUploadScoreFormat = (header: any[]): boolean => {
  if (header?.length < UploadScoreFields.fields.length - 1) return false;

  return (
    (header[0] == UploadScoreFields.keys.dapil ||
      header[0] == UploadScoreFields.header.dapil) &&
    (header[1] == UploadScoreFields.keys.candidate ||
      header[1] == UploadScoreFields.header.candidate) &&
    (header[2] == UploadScoreFields.keys.gender ||
      header[2] == UploadScoreFields.header.gender) &&
    (header[3] == UploadScoreFields.keys.party ||
      header[3] == UploadScoreFields.header.party) &&
    (header[4] == UploadScoreFields.keys.score_type ||
      header[4] == UploadScoreFields.header.score_type) &&
    (header[5] == UploadScoreFields.keys.score ||
      header[5] == UploadScoreFields.header.score) &&
    (header[6] == UploadScoreFields.keys.notes ||
      header[6] == UploadScoreFields.header.notes)
  );
};

export const UploadUtils = {
  isCorrectUploadFormat,
  isCorrectUploadWinnerFormat,
  isCorrectUploadSurveyFormat,
  isCorrectUploadScoreFormat,
};
